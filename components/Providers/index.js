import Google from "./Google";
import Facebook from "./Facebook";

export default function Providers() {
	return (
		<div className={"relative w-80 space-y-4 flex-col flex items-center"}>
			<div className={" flex flex-col items-center justify-center opacity-50 "}>
				<h1 className={"bg-white p-1 capitalize text-xs z-10"}>with</h1>
				<div
					className={"absolute w-full bg-black h-px border-black opacity-50"}
				/>
			</div>

			<div className={"w-56 flex flex-col items-center space-y-2"}>
				<Google />
				<Facebook />
			</div>

			<div
				className={"w-52 flex flex-col items-center justify-center opacity-50"}>
				<h1 className={"bg-white p-1 capitalize text-xs z-10"}>or</h1>
				<div
					className={"absolute w-full bg-black h-px border-black opacity-50"}
				/>
			</div>
		</div>
	);
}
