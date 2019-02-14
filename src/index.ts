import { RunService } from "rbx-services"

export const wait = (seconds: number) => {
    
    const goal = tick() + seconds

    while (tick() <= goal) {

        RunService.Stepped.Wait()
        
    }

}

export const milliWait = (milliseconds: number) => {

    wait(milliseconds / 1000)
    
}