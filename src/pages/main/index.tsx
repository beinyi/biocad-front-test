import * as React from "react";
import AminoForm from "./ui/AminoForm";
import SequenceAlignment from "./ui/SequenceAlignment";
import { useState } from "react";
import type { FormValues } from "./ui/types";

const MainPage: React.FunctionComponent = () => {
  const [result, setResult] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setResult(data);
  };
  return (
    <>
      <AminoForm onSubmit={onSubmit} />
      {result && (
        <SequenceAlignment
          sequence1={result.sequence1}
          sequence2={result.sequence2}
        />
      )}
    </>
  );
};

export default MainPage;
