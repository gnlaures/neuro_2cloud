class TypingBox {
    constructor(element) {
        this.element = document.querySelector(element);
        this.typedTextSpan = this.element.querySelector(".js-c-typingBox__quote");
        this.cursorSpan = this.element.querySelector(".js-c-typingox__cursor");
        this.message = this.element.querySelector('.js-c-typingBox__text').textContent;
        this.typingDelay = 80;
        this.erasingDelay = 100;
        this.newTextDelay = 2000; // Delay between current and next text
        this.textArrayIndex = 0;
        this.charIndex = 0;
    }

    type() {
        if (this.charIndex < this.message.length) {
            if (!this.cursorSpan.classList.contains("--typing")) {
                this.cursorSpan.classList.add("--typing");
            }
            this.typedTextSpan.textContent += this.message.charAt(this.charIndex);
            this.charIndex++;
            setTimeout(() => this.type(), this.typingDelay);
        } else {
            this.cursorSpan.classList.remove("--typing");
        }
    }

    start() {
        const textArray = [this.message];
        document.addEventListener("DOMContentLoaded", () => {
            if (textArray.length) setTimeout(() => this.type(), this.newTextDelay + 250);
        });
    }
}

//
new TypingBox(`#cTypingBox__a`).start();

