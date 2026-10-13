"""Draws the 1200 x 627 project thumbnails into public/covers.

Run from the project root:  python3 design-assets/make-covers.py
Each image is a simple diagram of what the project does. Edit the text here, run it again,
and commit the new PNGs. Needs Pillow (pip install pillow) and the Avenir Next system font (macOS).
"""
from PIL import Image, ImageDraw, ImageFont

FONT = '/System/Library/Fonts/Avenir Next.ttc'
W, H, S = 1200, 627, 2          # S = draw at 2x, then shrink for smooth edges
BG, WHITE, LINE = '#EEF0F2', '#FFFFFF', '#C3C8CF'
INK, MUTED, BURGUNDY, TINT = '#1E2126', '#4B515A', '#7A1F3D', '#F4E7EC'


def font(size, want):
    for i in range(12):
        try:
            f = ImageFont.truetype(FONT, size, index=i)
            if want.lower() in ' '.join(f.getname()).lower():
                return f
        except Exception:
            break
    return ImageFont.truetype(FONT, size, index=0)


HEAD, SUB, NOTE = font(40, 'Bold'), font(29, 'Regular'), font(28, 'Regular')


class Card:
    def __init__(self):
        self.img = Image.new('RGB', (W * S, H * S), BG)
        self.d = ImageDraw.Draw(self.img)

    def text(self, x, y, s, f, fill, anchor='la'):
        self.d.text((x * S, y * S), s, font=f.font_variant(size=f.size * S), fill=fill, anchor=anchor)

    def fit(self, f, s, max_w):
        # shrink the font until the line fits inside the box
        size = f.size
        while size > 22 and self.d.textlength(s, font=f.font_variant(size=size * S)) / S > max_w:
            size -= 1
        return f.font_variant(size=size)

    def box(self, x, y, w, h, title, lines=(), strong=False):
        self.d.rounded_rectangle([x * S, y * S, (x + w) * S, (y + h) * S], radius=26 * S, fill=WHITE,
                                 outline=BURGUNDY if strong else LINE, width=(5 if strong else 2) * S)
        ty, inner = y + 28, w - 52
        self.text(x + 28, ty, title, self.fit(HEAD, title, inner), INK)
        for i, line in enumerate(lines):
            self.text(x + 28, ty + 62 + i * 38, line, self.fit(SUB, line, inner), MUTED)

    def arrow(self, x1, y1, x2, y2):
        self.d.line([x1 * S, y1 * S, x2 * S, y2 * S], fill=MUTED, width=4 * S)
        import math
        a = math.atan2(y2 - y1, x2 - x1)
        for da in (2.7, -2.7):
            self.d.line([x2 * S, y2 * S, (x2 + 18 * math.cos(a + da)) * S, (y2 + 18 * math.sin(a + da)) * S],
                        fill=MUTED, width=4 * S)

    def save(self, path):
        self.img.resize((W, H), Image.LANCZOS).save(path, optimize=True)
        print('wrote', path)


# 1. Job Search & Resume Pipeline
c = Card()
bw, bh, xs, y1, y2 = 330, 170, (60, 435, 810), 60, 300
c.box(xs[0], y1, bw, bh, 'Entry modes', ('Scraper, paste a JD,', 'and form autofill'))
c.box(xs[1], y1, bw, bh, 'Fit check', ('Red flags, cache,', 'then fit score'), strong=True)
c.box(xs[2], y1, bw, bh, 'Tailoring', ('Keywords and', 'bullet selection'))
c.box(xs[2], y2, bw, bh, 'Claude Sonnet', ('Writes the final text',))
c.box(xs[1], y2, bw, bh, 'Validators', ('Check every claim',))
c.box(xs[0], y2, bw, bh, 'LaTeX PDF', ('Print-ready resume', 'and cover letter'))
c.arrow(xs[0] + bw + 4, y1 + bh / 2, xs[1] - 6, y1 + bh / 2)
c.arrow(xs[1] + bw + 4, y1 + bh / 2, xs[2] - 6, y1 + bh / 2)
c.arrow(xs[2] + bw / 2, y1 + bh + 4, xs[2] + bw / 2, y2 - 6)
c.arrow(xs[2] - 4, y2 + bh / 2, xs[1] + bw + 6, y2 + bh / 2)
c.arrow(xs[1] - 4, y2 + bh / 2, xs[0] + bw + 6, y2 + bh / 2)
c.text(60, 520, 'Groq and local Ollama score first. Claude Haiku is the fallback.', NOTE, INK)
c.text(60, 562, 'Red-flag rules and a cache run before any model call.', NOTE, MUTED)
c.save('public/covers/job-search-resume-pipeline.png')

# 2. Zero-Knowledge Password Authentication
c = Card()
c.box(60, 120, 330, 190, 'Browser', ('React app builds a', 'proof with SnarkJS'))
c.box(810, 120, 330, 190, 'Server', ('Node.js and Express', 'verify the proof'), strong=True)
c.d.rounded_rectangle([450 * S, 190 * S, 750 * S, 250 * S], radius=30 * S, fill=TINT)
c.text(600, 221, 'Only the proof is sent', font(26, 'Demi'), BURGUNDY, anchor='mm')
c.arrow(392, 270, 806, 270)
c.d.rounded_rectangle([60 * S, 380 * S, 1140 * S, 500 * S], radius=26 * S, fill=WHITE, outline=BURGUNDY, width=5 * S)
c.text(600, 440, 'The password never leaves the browser.', font(44, 'Bold'), INK, anchor='mm')
c.text(60, 548, 'Circom circuit, Poseidon hash, Groth16 proofs', NOTE, MUTED)
c.save('public/covers/zero-knowledge-password-authentication.png')

# 3. Efficient Multi-Task NLP with Task Vector Composition
c = Card()
c.box(60, 70, 380, 170, 'BERT + SST-2', ('Fine-tuned for', 'sentiment'))
c.box(60, 330, 380, 170, 'BERT + CoNLL-2003', ('Fine-tuned for', 'named entities'))
c.box(520, 170, 280, 230, 'Merge', ('the two', 'task vectors'), strong=True)
c.box(880, 190, 260, 190, 'One model', ('110M-parameter', 'BERT',))
c.arrow(444, 155, 516, 250)
c.arrow(444, 415, 516, 320)
c.arrow(804, 285, 876, 285)
c.text(60, 548, 'Built with PyTorch and Hugging Face Transformers', NOTE, MUTED)
c.save('public/covers/efficient-multitask-nlp-task-vector-composition.png')

# 4. Personal Budget Management System
c = Card()
c.box(60, 130, 330, 200, 'Bank statement', ('Uploaded by the', 'user'))
c.box(435, 130, 330, 200, 'Auto-categorize', ('Transactions sorted', 'into categories'), strong=True)
c.box(810, 130, 330, 200, 'Spending charts', ('Shown in a PyQt6', 'desktop app'))
c.arrow(394, 230, 431, 230)
c.arrow(769, 230, 806, 230)
c.text(60, 430, 'Python, PyQt6 and MongoDB', font(34, 'Demi'), INK)
c.text(60, 484, 'Built by a team of 4', NOTE, MUTED)
c.save('public/covers/personal-budget-management-pyqt6.png')
