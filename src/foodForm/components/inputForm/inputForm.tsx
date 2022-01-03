import {Form, Input} from "antd";
import {FieldError} from "react-hook-form";

interface InputFormParams {
    label: string,
    errors?: { type?: FieldError | undefined; name?: FieldError | undefined; description?: FieldError | undefined; },
    editMode: boolean,
    onChange(value:string): void,
    setSecondValue?(value: any): void
}

export const InputForm = (props : InputFormParams) => {
    return (
        <Form.Item label={props.label} validateStatus={props?.errors?.description ? "error" : "validating"} help={props?.errors?.description && props.errors.description.message}>
            <Input
                disabled={!props.editMode}
                onChange={(e) => {
                    props.onChange(e.target.value);
                    props.setSecondValue && props.setSecondValue(e.target.value);
                }}
            />
        </Form.Item>
    )
}