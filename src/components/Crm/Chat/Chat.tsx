import { AttachIcon } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const comments = [
    {
      avatar: "/images/avatar-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      backgroundColor: "bg-refreshing-cyan",
      textColor: "text-dark",
      time: "5min",
      align: "left"
    },
    {
      avatar: "/images/avatar-2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      backgroundColor: "bg-yellow-light",
      textColor: "text-dark",
      time: "5min",
      align: "right"
    },
    {
      avatar: "/images/avatar-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      backgroundColor: "bg-refreshing-cyan",
      textColor: "text-dark",
      time: "5min",
      align: "left"
    },
  ];

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-[45px]">
      <div className="flex flex-col px-[24px] pt-[30px] gap-[12px] md:gap-[16px]">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`flex gap-[5px] md:gap-[12px] h-[82px] md:h-[123px] ${comment.align === 'right' && 'flex-row-reverse' }`}
          >
            <img
              src={comment.avatar}
              className="h-[16px] w-[16px] md:h-[40px] md:w-[40px] self-end"
              alt="avatar"
            />
            <div
              className={`${comment.align === 'right' ? 'rounded-bl-[16px]' : 'rounded-br-[16px]'} rounded-t-[16px] h-[74px] md:h-[100px] max-w-[262px] md:max-w-[508px] ${comment.backgroundColor} px-[12px] py-[10px] md:px-[30px] md:py-[25px] ${comment.textColor} text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]`}
            >
              {comment.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-[16px] pb-[24px]">
        <div className="flex flex-col bg-green-light rounded-2xl px-[16px] py-[24px]">
          <textarea
            placeholder="Leave a comment"
            className="bg-transparent appearance-none outline-none text-dark-4 text-sm"
          />
          <div className="flex gap-[14px]">
            <div className="flex w-full justify-end items-center cursor-pointer gap-[5px]">
              <AttachIcon width="14" height="14" />
              <div className="text-dark text-[10px] leading-[15px]">
                Attachment
              </div>
            </div>
            <Button
              variant="gradient"
              size="md"
              className="h-[36px] w-[146px] !text-[13px] !px-[20px]"
            >
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
