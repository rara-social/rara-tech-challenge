import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 0.25rem;
  padding: 0.25rem;
  cursor: pointer;
  width: 100%;
  border: 1px solid lightgrey;
`;
const Text = styled.span`
  font-weight: bold;
`;
const Input = styled.input``;
const Label = styled.label`
  cursor: pointer;
`;

/*
  This component aims to consolidate uneditable text fields with editable input fields by allowing users to directly edit text that might appear on a user profile page.

  A better implementation might make user of React.forwardRef so that the state of text/input field is not controlled entirely by this component, but rather accessible by the parent component via the forwarded ref.  This would allow us to include validation logic in the appropriate place.

  A better implementation would similarly include an Error wrapper component so that errors in the input could be immediately displayed to the user for their correction.  This would also require us pass some sort of error object in props so that we could gracefully display error messages.
*/

const TextInput = ({ label = "", val = "" }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(val);

  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);

  return (
    <Wrapper onClick={handleFocus}>
      <Label onClick={handleFocus}>{label}: </Label>
      {focused ? (
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Text"
          onBlur={handleBlur}
        />
      ) : (
        <Text onClick={handleFocus}>{value}</Text>
      )}
    </Wrapper>
  );
};

export default TextInput;
