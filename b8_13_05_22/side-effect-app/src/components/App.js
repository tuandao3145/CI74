import React, { useEffect, useState } from "react";

// component App
export default function App() {
	// hold new title
	const [newTitle, setNewTitle] = useState("CI74");
	const [aNum, setANum] = useState(0);
	const [bNum, setBNum] = useState(0);

	// change title khi newTitle changed
	useEffect(() => {
		document.title = newTitle;
	}, [newTitle]);

	console.log(newTitle);
	console.log(aNum);
	console.log(bNum);

	//render App
	return (
		<div className="App">
			<input
				type="text"
				placeholder="Input web's title here!"
				onChange={(e) => setNewTitle(e.target.value)}
			/>
			<br />
			<input
				type="number"
				placeholder="Input A"
				onChange={(e) => setANum(Number(e.target.value))}
			/>
			+
			<input
				type="number"
				placeholder="Input B"
				onChange={(e) => setBNum(Number(e.target.value))}
			/>
			Tổng a và b là: {aNum + bNum}
		</div>
	);
}

// functions trong useEffect chỉ chạy sau khi component đã được render hoặc khi 1 state trong dependency array thay đổi. Còn lại khi các state khác thay đổi sẽ không ảnh hưởng đến những functions này.
// dependency có thể không có hoặc mảng rỗng []
// []: chỉ chạy 1 lần
// không có dependency: chạy như thông thường
