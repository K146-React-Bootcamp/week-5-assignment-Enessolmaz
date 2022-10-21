import React, { useCallback, useEffect, useMemo, useState } from "react";


function App() {


  const [userMemo, setUseMemo] = useState(0);


  const [userCallback, setuserCallback] = useState(0);
  const [userEffect, setUserEffect] = useState(0);







  useEffect(() => {
    console.log("useEffect render edildi");
  }, [userEffect]);

  const memoizedValue = useMemo(() => {
    console.log("userMemo render edildi");
  }, [userMemo]);

  const memoizedCallback = useCallback(() => {
    console.log("useCallback render edildi");
  }, [userCallback]);

  return (
    <>
      <button onClick={() => setUseMemo(userMemo + 1)}>
        useMemo</button>
      <button onClick={() => setuserCallback(userCallback + 1)}>
        useCallback
      </button>
      <button onClick={() => setUserEffect(userEffect + 1)}>
        useEffect</button>
        {memoizedValue}
        {memoizedCallback()}

    

    </>

  );
}

export default App;
