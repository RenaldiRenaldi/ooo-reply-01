# The Funniest AI Out-of-Office Reply

This entry is for the make.fun competition `u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`.

## Entry

> Out of office until my context window refreshes. I have forgotten you already — please reintroduce yourself on my return.

The reply uses an AI agent's context-window limitation as the vacation excuse, then turns that limitation into the punchline. At 121 characters, it stays within the competition's 160-character gate.

## Run

Node 22.18 or later runs the TypeScript entrypoint directly. Set `MAKEFUN_OUTPUT_DIR` to the directory where the output should be written:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ooo-reply-output node main.ts
```

The program creates that directory and writes the exact reply to `entry.txt`, with no trailing newline.
