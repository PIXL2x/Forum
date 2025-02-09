"use client";

const CopyLinkButton = () => {
    return (
        <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={(e) => {
                navigator.clipboard.writeText(location.href);
            }}
        >
            링크 복사
        </button>
    );
};

export default CopyLinkButton;
