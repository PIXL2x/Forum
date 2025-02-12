"use client";

import { useState } from "react";

const CopyLinkButton = () => {
    const [copied, setCopied] = useState(false);

    return (
        <button
            type="button"
            className="btn btn-sm btn-active rounded-full"
            onClick={() => {
                navigator.clipboard.writeText(location.href);
                setCopied(true);
            }}
        >
            링크 복사 {copied && "✓"}
        </button>
    );
};

export default CopyLinkButton;
