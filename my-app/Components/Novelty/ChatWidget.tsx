import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useChat } from "@ai-sdk/react"; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


import {
  X, MessageCircle, Send, Loader2, ArrowDownCircle,
} from 'lucide-react';
import { Button } from './Novlety_ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Novlety_ui/card';
import { ScrollArea } from './Novlety_ui/scroll-area';
import { Input } from './Novlety_ui/input';

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isShowChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);

  const {
    messages, input, handleInputChange, handleSubmit, isLoading, stop, reload, error,
  } = useChat({ api: "/api/gemini" });

  useEffect(() => {
    const handleScroll = () => {
      setShowChatIcon(window.scrollY > 200);
      if (window.scrollY <= 200) setIsChatOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      <AnimatePresence>
        {isShowChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button 
    ref={chatIconRef} 
    onClick={toggleChat} 
    size="icon" 
    className="rounded-full w-25 h-25 p-0 shadow-lg bg-primary hover:bg-primary/90"
>
    {!isChatOpen ? (
         <div className="flex justify-center items-center w-full h-full">
         <DotLottieReact
           src="https://lottie.host/d3db105e-aa5e-4f7b-aa25-453ff534b10a/4aJGOTNXMb.lottie"
           loop
           autoplay
           className="w-24 h-24 transform scale-110" // Tailwind classes for emphasis
         />
       </div>
     
    ) : (
        <ArrowDownCircle className="w-25 h-25" />
    )}
</Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className=" fixed bottom-20 right-4 z-50 w-[95%] max-w-md md:w-[500px]"
          >
            <Card className="border shadow-lg overflow-hidden">
              <CardHeader className=" bg-[#452078] flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                <CardTitle className="text-lg text-white font-bold">
                  Chat with smart roadmap planner
                </CardTitle>
                <Button onClick={toggleChat} size="icon" variant="ghost" className=" h-8 w-8 p-0">
                  <X  color='#ffff'  className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className=" bg-gray-100 p-4 pt-2">
                <ScrollArea className="h-[350px] pr-2 rounded-md">
                  {messages?.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center px-4">
                      <p>No messages yet..</p>
                      <p className="text-sm mt-2">Ask about planning a roadmap for your any course or training program!</p>
                    </div>
                  )}
                  <div className="space-y-4 p-2">
                    {messages?.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`rounded-lg p-3 max-w-[85%] ${
                            message.role === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-800 border border-gray-200"
                          }`}
                        >
                          <div className={`prose max-w-none ${
                              message.role === "user"
                                  ? "prose-invert text-base" // Increased font size to text-base
                                  : "prose-gray text-base"   // Increased font size to text-base
                          }`}>
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                            >
                                {message.content}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {isLoading && (
                    <div className="flex items-center justify-center gap-2 p-2 mt-4 text-sm">
                      <Loader2 className="animate-spin h-4 w-4 text-primary" />
                      <span>Loading...</span>
                      <button className="underline text-primary ml-2" type="button" onClick={stop}>Abort</button>
                    </div>
                  )}
                  {error && (
                    <div className="flex items-center justify-center gap-2 p-2 text-sm text-red-500 mt-4">
                      <span>An error occurred.</span>
                      <button className="underline text-primary ml-2" type="button" onClick={reload}>Retry</button>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t p-3 bg-gray-100">
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                  <Input 
                    value={input} 
                    onChange={handleInputChange} 
                    className="flex-1 bg-white" 
                    placeholder="Type your message here..." 
                  />
                  <Button 
                    type="submit" 
                    className=" bg-green-700 h-9 w-9 p-0" 
                    disabled={isLoading} 
                    size="icon"
                  >
                    <Send color="#ffffff"className=" h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;