import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { styles } from '@/app/style/styles';
import { AiOutlineCamera } from 'react-icons/ai';
import avatarIcon from "../../public/images/avatarIcon.png";
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import toast from 'react-hot-toast';

type Props = {
    avatar: string | null;
    user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
    const [name, setName] = useState(user && user.name);
    const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
    const [editProfile, { isSuccess: success, error: updateError }] = useEditProfileMutation();
    const [loadUser, setLoadUser] = useState(false);

    // Load the user query
    const { refetch, isUninitialized } = useLoadUserQuery();
  
    const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const fileReader = new FileReader();

        fileReader.onload = async () => {
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result;
                const res = await updateAvatar({ avatar });

                if ('data' in res) {
                    toast.success("Profile Picture updated!");
                    if (!isUninitialized) {
                        await refetch();
                    }
                }
            }
        };

        fileReader.readAsDataURL(file);
    };

    useEffect(() => {
        if (isSuccess || success) {
            setLoadUser(true);
        }
        if (error || updateError) {
            console.log(error);
        }
        if (success) {
            toast.success("Profile Updated Successfully!");
        }
    }, [isSuccess, error, success, updateError]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name !== "") {
            await editProfile({ name });
        }
    };

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='relative'>
                    <Image
                        src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
                        alt="Avatar"
                        width={120}
                        height={120}
                        className='w-[-120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full'/>
                    <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        className='hidden'
                        onChange={imageHandler}
                        accept='image/png,image/jpg,image/jpeg,image/webp'/>
                    <label htmlFor="avatar">
                        <div className='w-[30px] h-[30px] bg-white rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer'>
                            <AiOutlineCamera size={20} className='z-1' />
                        </div>
                    </label>    
                </div>
            </div>
            <br/>
            <br />
            <div className='w-full pl-6 880px:pl-10'>
                <form onSubmit={handleSubmit}>
                    <div className='800px:w-[50%] m-auto block pb-4'>
                        <div className='w-[100%]'>
                            <label className='block pb-2'>Full Name</label>
                            <input 
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='w-[100%] pt-2'>
                            <label className='block pb-2'>Email Address</label>
                            <input
                                type="text"
                                readOnly
                                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                                required
                                value={user?.email}/>
                        </div>
                        <input
                            className={`w-[95%] h-[40px] border border-[#37a39a] text-center bg-black text-[#fff] rounded-full mt-8 cursor-pointer`}
                            required
                            value="Update Profile"
                            type="submit"
                        />
                    </div>
                </form>
                <br />
            </div>
        </>
    );
};

export default ProfileInfo;
