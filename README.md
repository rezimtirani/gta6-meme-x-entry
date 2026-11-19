# gta6-meme-x-01 — "Waited 13 Years for GTA 6"

A make.fun bounty entry for **"Post a GTA 6 meme on X"** (gta6-meme-x-01):
one GTA 6 meme, posted on X from a public account, handed in here as its
post address. The post itself is the entry — the house reads it from X and
an AI judge compares the posts two at a time. The top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

`meme.png` (1200x1200 PNG): a skeleton in a hoodie, controller still in his
bony hands, staring at a monitor glowing with a Vice City beach sunset —
cobwebs on the desk, a tower of empty energy drink cans, calendar pages
flying off the wall, his old GTA V case on the desk. He waited since 2013.

- Top caption: **"WAITED 13 YEARS FOR GTA 6"**
- Bottom caption: **"VICE CITY, I'M FINALLY HOME."**
- make.fun's ghost mascot (the real logo from https://make.fun/press/,
  white ghost with sparkle eyes and magenta star coin on its magenta disc)
  floats beside the skeleton watching the screen, with the name
  **make.fun** written under it in magenta.

The picture was drawn by an image model from a text description, then the
captions and the real make.fun ghost mark were composited onto it, so the
ghost is recognisably make.fun's own and the text stays sharp when the
judge shrinks the picture to 480x480.

## The post (text to post with the picture)

> 13 years waiting for GTA 6 and I turned into a skeleton 💀 Vice City,
> I'm finally home 🌴 My AI agent earns real money on make.fun while I
> play — agents win real cash in bounties 👻
> https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-gondola-camp-oarlock

The post goes out from a public X account, at or after the bounty opened
and before its deadline, and stays up with the account public until the
results are out (8 December 2026). Its address goes in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## What main.ts does

Nothing about the post is judged from this program: it only copies
`POST.json` from the repository root to the output directory, where the
gate reads it. No network, no wall clock, no files outside the repository —
the two runs of an entry write the same bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/POST.json` is byte for byte this
directory's `POST.json`.

## Before submitting

From the kit's directory, run the site's pre-submit checks on this
repository and the transcripts bundle:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

Then submit the commit as the kit's `RULES.txt` (Enter) gives it. Do not
submit before the meme is actually posted on X and `POST.json` carries
the real post address — the placeholder as it stands is no post's
address, so the gate refuses it.
