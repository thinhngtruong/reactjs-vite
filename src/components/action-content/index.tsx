import React, { useState } from "react";
import { ActionContentType } from "./types";
import { Input, Button } from "src/components/common";
import "./index.scss";

export const ActionContent = (props: ActionContentType) => {
  const [ feedback, setFeedBack ] = useState('');
  const { content, toggle } = props;

  const handleClickConfirm = () => {
    toggle('Thank you for your confirm!');
    setFeedBack('')
  }

  const handleChangeFeedback = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFeedBack(target.value)
  }

  return (
    <section>
      <h3>{content}</h3>
      <p>Please leave feedback it will help us to improve the website</p>
      <Input placeholder="Enter your feedback" value={feedback} onChange={handleChangeFeedback} />
      <div className="confirm-btn">
        <Button onClick={handleClickConfirm}>Confirm</Button>
      </div>
    </section>
  );
};
