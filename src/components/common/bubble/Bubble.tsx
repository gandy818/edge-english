import './bubble.css';

interface BubbleType {
  text: string;
  top?: number;
  left?: number | string;
  right?: number | string;
  bg?: string;
  textClassName?: string;
  border?: boolean;
}

export default function Bubble({
  text,
  top,
  left,
  right,
  bg = 'white',
  textClassName,
  border = false,
}: BubbleType) {
  const borderColor = border ? '#666' : bg;

  return (
    <div>
      <div
        className="absolute"
        style={{
          top: `${top}px`,
          left: typeof left === 'number' ? `${left}px` : left,
          right: typeof right === 'number' ? `${right}px` : right,
        }}
      >
        <div
          className={`bubble shadow-shadow1 h-fit text-nowrap rounded-lg border px-4.5 py-2 after:absolute after:border`}
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
            className={`whitespace-normal break-words text-center font-bold leading-none text-[#31313C] ${textClassName}`}
          >
            {text}
          </p>
        </div>
      </div>
      <div
        className="absolute"
        style={{
          top: `${top}px`,
          left: typeof left === 'number' ? `${left}px` : left,
          right: typeof right === 'number' ? `${right}px` : right,
        }}
      >
        {/* ml-[1px] mt-[1px] : border 떄문 */}
        <div
          className={`ml-[1px] mt-[1px] h-fit text-nowrap rounded-lg px-4.5 py-2`}
          style={{ background: bg }}
        >
          <p
            className={`whitespace-normal break-words text-center font-bold leading-none text-[#31313C] ${textClassName}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
