import { useState } from 'react';

export default function Test({ isError }) {
  // const [isError, setIsError] = useState(false);
  // const handleClick = () => {
  //   if (isError) throw new Error();
  // };
  if (isError) throw new Error('Error 발생');
  return (
    <div>
      no Error
      {/* <button type="button" onClick={handleClick}>button</button> */}
    </div>
  );
}
