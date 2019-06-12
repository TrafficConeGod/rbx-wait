import { RunService } from "rbx-services";

export const customWait = (seconds: number) => {
	const goal = tick() + seconds;
	while (tick() <= goal) {
		RunService.Stepped.Wait();
	}
}

export const milliWait = (milliseconds: number) => {
	customWait(milliseconds / 1000);
}
