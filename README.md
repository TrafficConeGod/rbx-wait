# rbx-wait
A better wait function for roblox-ts.

## Examples
```ts
wait(0.03) // This is the lowest amount that you can wait with the default wait function.
```
```ts
import { wait } from "rbx-wait"
wait(0.015) // This is approximately the lowest that rbx-wait can wait for (1 frame).
```

### Using rbx-wait with milliseconds
If you prefer a wait function more like setTimeout then you can try milliWait
```ts
import { milliWait } from "rbx-wait"
milliWait(1000) // Will wait one second.
```