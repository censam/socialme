import { InputBase, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useSelector, usDispatch } from "react-redux";

const CommentWidget = ({ post_id }) => {
 const user = useSelector((state) => state.user);
 const { palette } = useTheme();
 const [comment, setComment] = useState("");

 const enterComment = async (e) => {
  if (e.key == "Enter") {
   console.log("Enter comment");
   const response = await fetch(
    `http://localhost:3001/posts/${post_id}/comment`,
    {
     method: "POST",
     body: JSON.stringify(e.target.value),
    }
   );
   console.log(response);
   setComment("");
  }
 };

 return (
  <>
   <WidgetWrapper>
    <FlexBetween gap="1.5rem">
     <UserImage image={user.picturePath} size="25px" />
     <InputBase
      placeholder="Write a comment..."
      onChange={(e) => setComment(e.target.value)}
      onKeyDown={enterComment}
      value={comment}
      sx={{
       width: "100%",
       backgroundColor: palette.neutral.light,
       borderRadius: "5px",
       padding: "5px",
      }}
     />
    </FlexBetween>
   </WidgetWrapper>
  </>
 );
};

export default CommentWidget;
