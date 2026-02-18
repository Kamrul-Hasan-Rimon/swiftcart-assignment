# SwiftCart E-Commerce

A responsive e-commerce application built with HTML, Tailwind CSS, and Vanilla JavaScript using the FakeStoreAPI.

## Live Link
[\live link\]](https://incandescent-puffpuff-3b5bf1.netlify.app/)

## Questions & Answers

**1) What is the difference between null and undefined?**
Null এবং Undefined এর মূল পার্থক্য হলো:
* **Undefined:** যখন কোনো ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু কোনো মান (value) অ্যাসাইন করা হয় না, তখন তার টাইপ হয় undefined.
* **Null:** এটি একটি অ্যাসাইনমেন্ট ভ্যালু যা ইচ্ছাকৃতভাবে ব্যবহার করা হয় বোঝানোর জন্য যে ভেরিয়েবলটি খালি বা এর কোনো মান নেই। এটি মূলত "no value" বা অবজেক্টের অনুপস্থিতি নির্দেশ করে।

**2) What is the use of the map() function in JavaScript? How is it different from forEach()?**
* **map():** এটি একটি অ্যারের প্রতিটি উপাদানের ওপর লুপ চালায় এবং একটি ফাংশন এক্সিকিউট করে **নতুন একটি অ্যারে** রিটার্ন করে। মূল অ্যারেটি অপরিবর্তিত থাকে।
* **forEach():** এটি শুধুমাত্র অ্যারের প্রতিটি উপাদানের ওপর লুপ চালায় এবং কোড এক্সিকিউট করে, কিন্তু **কোনো কিছু রিটার্ন করে না** (returns undefined)।

**3) What is the difference between == and ===?**
* **== (Loose Equality):** এটি শুধুমাত্র ভ্যালু (value) চেক করে। যদি ডেটা টাইপ ভিন্ন হয়, তবে এটি টাইপ কনভার্সন (coercion) করে তুলনা করার চেষ্টা করে। (যেমন: `5 == "5"` হবে true)।
* **=== (Strict Equality):** এটি ভ্যালু এবং ডেটা টাইপ (data type) উভয়ই চেক করে। কোনো টাইপ কনভার্সন করে না। (যেমন: `5 === "5"` হবে false)।

**4) What is the significance of async/await in fetching API data?**
API থেকে ডেটা ফেচ করা একটি সময়সাপেক্ষ কাজ (asynchronous operation)। `async/await` ব্যবহার করলে কোডটি দেখতে synchronous বা সাধারণ লাইনের মতো মনে হয়, যা পড়া এবং ডিবাগ করা সহজ। `await` কিওয়ার্ডটি প্রমিজ (Promise) রিজলভ না হওয়া পর্যন্ত কোডের এক্সিকিউশন থামিয়ে রাখে, ফলে `.then()` চেইন ব্যবহার করার জটিলতা কমে যায়।

**5) Explain the concept of Scope in JavaScript (Global, Function, Block).**
জাভাস্ক্রিপ্টে স্কোপ নির্দেশ করে কোডের কোন অংশ থেকে কোনো ভেরিয়েবল এক্সেস করা যাবে।
* **Global Scope:** কোনো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা ভেরিয়েবল। এটি পুরো কোডের যেকোনো জায়গা থেকে এক্সেস করা যায়।
* **Function Scope:** ফাংশনের ভেতরে ডিক্লেয়ার করা ভেরিয়েবল (`var`, `let`, `const`)। এটি শুধুমাত্র ওই ফাংশনের ভেতরেই ব্যবহার করা যায়।
* **Block Scope:** `{}` বা কারলি ব্রেসিসের ভেতরে `let` বা `const` দিয়ে ডিক্লেয়ার করা ভেরিয়েবল। এটি শুধুমাত্র ওই নির্দিষ্ট ব্লকের ভেতরেই কাজ করে (যেমন if কন্ডিশন বা loop এর ভেতর)।