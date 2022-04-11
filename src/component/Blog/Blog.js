import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className="flex gap-5 justify-center mt-8">
            <div className='cards bg-red-500 p-4 rounded-md text-center'>
                <h1 className="text-xl mb-4 font-bold">What is Context API ?</h1>
                 <p className="font-bold">কনটেক্সট API হলো React App এ গ্লোবাল ভেরিয়েবল তৈরি করার একটি সহজ উপায় যার মাধ্যমে সবখানে ডাটা পাস করা যায়। এটা মূলত প্রপ ড্রিলিং বা Parent, Child, Grandparent এর বিকল্প হিসাবে ব্যবহার করা হয়।</p>
            </div>

            <div className='cards bg-red-500 p-4 rounded-md text-center'>
                <h1 className='text-xl mb-4 font-bold'>What is Semantic Tag ?</h1>
                <p className='font-bold'>Semantic Tag হলো যে সকল Tag এর অর্থ আছে। যেমন From, Table, Article, Footer, Header ইত্যাদি এগুলো semantic Tag. এই ট্যাগ গুলো বিভিন্ন অর্থ বহন করে যাতে সহজেই বোঝা যায় কোন Tag কিসের জন্য ব্যবহার কারা হচ্ছে । Non Semantic Tag হলো Div, Span ইত্যাদি।</p>
            </div>
        </div>
    );
};

export default Blog;