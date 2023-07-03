import Image from "next/image"
import Link from 'next/link'; 
import React from 'react';
import Layout from '../src/app/layout';

export default function Chat() {
  return (
    <div className="chat-box">
      <div className="chat-box-header">PyBot</div>
      <div className="chat-box-body">
        <div className="response">
          <p>Hi!, How can I help you today?</p>
        </div>
      </div>
      <div className="chat-box-footer">
        <input type="text" placeholder="Ask a question..." />
        <button>Send</button>
      </div>
    </div>
  )
}