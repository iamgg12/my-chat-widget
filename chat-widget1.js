<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>AOS.init();</script>
<div id="chat-widget-root"></div>
<script src="chat-widget.js"></script>
<style id="chat-widget-styles">
.chat-assist-widget {
    font-family: 'Poppins', sans-serif;
}
.chat-window {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 370px;
    max-width: 90vw;
    min-width: 320px;
    height: 540px;
    max-height: 90vh;
    min-height: 400px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 32px rgba(16,185,129,0.18);
    border: none;
    overflow: hidden;
    display: none;
    flex-direction: column;
    z-index: 1000;
    transition: box-shadow 0.2s;
    resize: none;
    box-sizing: border-box;
}
.chat-window.visible {
    display: flex;
}
.chat-header {
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 18px 20px 18px 16px;
    gap: 12px;
    position: relative;
}
.chat-header-logo {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: #fff;
    object-fit: contain;
    padding: 3px;
}
.chat-header-title {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}
.chat-close-btn {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.18);
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}
.chat-close-btn:hover { background: rgba(0,0,0,0.32); }
.chat-welcome, .user-registration {
    padding: 32px 24px 0 24px;
    text-align: center;
}
.chat-welcome-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 18px;
    color: #222;
}
.chat-start-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 14px 0;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.13);
    transition: background 0.2s;
}
.chat-start-btn:hover { background: #222; }
.chat-response-time {
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 0;
}
.user-registration.active { display: block; }
.user-registration { display: none; }
.registration-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 18px;
}
.registration-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0;
}
.form-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
}
.form-label {
    font-size: 1rem;
    font-weight: 500;
    color: #222;
}
.form-input {
    padding: 12px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    background: #f9fafb;
    transition: border 0.2s;
}
.form-input:focus { border-color: #10b981; outline: none; }
.form-input.error { border-color: #ef4444; }
.error-text {
    font-size: 0.95rem;
    color: #ef4444;
    margin-top: 2px;
}
.submit-registration {
    width: 100%;
    padding: 14px 0;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.13);
    transition: background 0.2s;
}
.submit-registration:hover { background: #222; }
.chat-body {
    display: none;
    flex-direction: column;
    height: 100%;
    flex: 1 1 auto;
    min-height: 0;
    box-sizing: border-box;
}
.chat-body.active { display: flex; }
.chat-messages {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding: 24px 12px 0 12px;
    background: #f9fafb;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overscroll-behavior: contain;
    touch-action: pan-y;
    box-sizing: border-box;
}
.chat-bubble {
    max-width: 80%;
    word-break: break-word;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 16px;
    padding: 12px 16px;
    margin-bottom: 0;
    white-space: pre-line;
    box-sizing: border-box;
    display: inline-block;
}
.chat-bubble.user-bubble {
    background: #000;
    color: #fff;
    align-self: flex-end;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 2px 8px rgba(16,185,129,0.10);
    text-align: left;
}
.chat-bubble.bot-bubble {
    background: #fff;
    color: #222;
    align-self: flex-start;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 1px 4px rgba(16,185,129,0.07);
    border: 1px solid #e5e7eb;
    text-align: left;
}
.chat-controls {
    padding: 18px 14px 18px 14px;
    background: #fff;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 10px;
    align-items: center;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    width: 100%;
}
.chat-textarea {
    flex: 1;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #f9fafb;
    color: #222;
    resize: none;
    font-size: 1rem;
    line-height: 1.5;
    max-height: 120px;
    min-height: 48px;
    transition: border 0.2s;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
}
.chat-textarea:focus { border-color: #10b981; outline: none; }
.chat-textarea::placeholder { color: #6b7280; }
.chat-submit {
    background: #000;
    color: #fff;
    border: none;
    border-radius: 10px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    transition: background 0.2s;
    flex-shrink: 0;
    margin-left: 0;
    min-width: 48px;
    max-width: 48px;
    box-sizing: border-box;
}
.chat-submit:hover { background: #222; }
.chat-submit svg { width: 22px; height: 22px; }
.chat-launcher {
    position: fixed;
    bottom: 20px;
    right: 32px;
    height: 56px;
    border-radius: 9999px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.13);
    z-index: 999;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    padding: 0 20px 0 16px;
    gap: 8px;
    font-size: 1.1rem;
    font-weight: 600;
}
.chat-launcher:hover { background: #222; }
.chat-launcher svg { width: 24px; height: 24px; }
.chat-launcher-text { font-weight: 600; font-size: 1rem; white-space: nowrap; }
.hidden { display: none !important; }
@media (max-width: 600px) {
    .chat-window { width: 98vw; right: 1vw; left: 1vw; min-width: unset; }
    .chat-launcher { right: 1vw; left: 1vw; width: 98vw; justify-content: center; }
    .chat-bubble { max-width: 95vw; font-size: 0.97rem; }
    .chat-messages { padding: 16px 2vw 0 2vw; }
    .chat-controls { padding: 12px 4vw 12px 4vw; }
}
.chat-window-resizer {
    position: absolute;
    width: 22px;
    height: 22px;
    right: 2px;
    bottom: 2px;
    cursor: se-resize;
    z-index: 10;
    background: transparent;
}
.chat-window-resizer:after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-right: 2.5px solid #000;
    border-bottom: 2.5px solid #000;
    border-radius: 0 0 6px 0;
    position: absolute;
    right: 2px;
    bottom: 2px;
}
</style>
</body>
</html>