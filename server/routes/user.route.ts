import express from 'express';
import { activateUser, loginUser, registrationUser,logoutUser, updateAccessToken, getUserInfo, socialAuth, updateUserInfo, updatePassword, updateProfilePicture, getAllUsers, updateUserRole, deleteUser } from '../controllers/user.controller';
import { authorizeRoles, isAuthenticated } from "../middleware/auth"
const userRouter = express.Router();


userRouter.post('/registration', registrationUser);

userRouter.post('/activate-user', activateUser);

userRouter.post('/login', loginUser);

userRouter.get('/logout',isAuthenticated,logoutUser);

userRouter.get('/refresh',updateAccessToken);

userRouter.get("/me",isAuthenticated,getUserInfo);

userRouter.post('/socialAuth', socialAuth);

userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);

userRouter.put("/update-user-password",isAuthenticated, updatePassword );

userRouter.put("/update-user-avatar",isAuthenticated, updateProfilePicture );

userRouter.get("/get-users", isAuthenticated,authorizeRoles("admin"), getAllUsers);

userRouter.put("/update-user-role", isAuthenticated,authorizeRoles("admin"), updateUserRole);

userRouter.delete("/delete-user/:id", isAuthenticated,authorizeRoles("admin"), deleteUser );

export default userRouter;