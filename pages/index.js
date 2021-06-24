// Inspiration: https://codepen.io/garrettbear/pen/JzMmqg

// Initial Load Receipt is over 100vh
// On scroll when towards bottom of receipt wrapper to load next item
// once all items have loaded to begin loading random items

// Infinite Scroll Example
// https://codesandbox.io/s/github/tannerlinsley/react-virtual/tree/master/examples/infinite-scroll?file=/src/index.js:97-113
import { useRef, useCallback } from "react"
// import { useInfiniteQuery } from "react-query";
import { useVirtual } from "react-virtual";

export default function Home() {
  const parentRef = useRef()

  const rowVirtualizer = useVirtual({
    size: 10000,
    parentRef,
    estimateSize: useCallback(() => 35, []),
  })
  return (
    <div className="page">
    <div
      ref={parentRef}
      className="receipt"
      style={{
        width: `300px`,
        overflow: 'auto',
      }}
    >
      <div
        className="ListInner"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.virtualItems.map(virtualRow => (
          <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  </div>
    )
  }
  
  // <div className="page">
  //   <div className="receipt">
  //     <div className="demo">
  //       {/* Default div for page load */}
  //     </div>
  //     {/* loading */}
  //     {/* error */}

  //   </div>
  // </div>
