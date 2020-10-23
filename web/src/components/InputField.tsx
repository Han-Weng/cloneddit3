import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <Box mt={4}>
      <FormControl isInvalid={!!error}>
        {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : null}
        <Input
          as={textarea ? "textarea" : "input"}
          pt={textarea ? 3 : 0}
          height={textarea ? 40 : undefined}
          {...field}
          {...props}
          id={field.name}
        />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    </Box>
  );
};
