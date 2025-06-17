import './bubble.css';

interface BubbleType {
  text: string;
  top?: number;
  left?: number;
  bg?: string;
  textClassName?: string;
  border?: boolean;
}

export default function BubbleTopTail({
  text,
  top,
  left,
  bg = 'white',
  textClassName,
  border = false,
}: BubbleType) {
  const borderColor = border ? '#666' : bg;

  return (
    <div>
      <div
        className="animate-up-down absolute"
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        <div
          className={`bubbleTopTail shadow-shadow1 h-fit text-nowrap rounded-[4px] border px-[10px] py-1 after:absolute after:border`}
          style={
            {
              background: bg,
              '--after-bg': bg,
              borderColor: borderColor,
              '--after-border': borderColor,
            } as React.CSSProperties
          }
        >
          <p
            className={`text-center font-bold leading-none text-[#31313C] ${textClassName}`}
          >
            {text}
          </p>
        </div>
      </div>
      <div
        className="animate-up-down absolute"
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        {/* ml-[1px] mt-[1px] : border 떄문 */}
        <div
          className={`ml-[1px] mt-[1px] h-fit text-nowrap rounded-[4px] px-[10px] py-1`}
          style={{ background: bg }}
        >
          <p
            className={`text-center font-bold leading-none text-[#31313C] ${textClassName}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
