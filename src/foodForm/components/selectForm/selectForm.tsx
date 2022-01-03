import {Form, Select} from "antd";
import {FieldError} from "react-hook-form";

const { Option } = Select;

interface SelectFormParams {
    label: string,
    errors?: { type?: FieldError | undefined; name?: FieldError | undefined; description?: FieldError | undefined; },
    editMode: boolean,
    onChange(value:string): void,
    setFirstValue?(value: any): void,
    options: string[]
}

export const SelectForm = (props: SelectFormParams) => {
    return (
            <Form.Item label={props.label} validateStatus={props?.errors?.type ? "error" : "validating"} help={props?.errors?.type && props.errors.type.message}>
                <Select style={{width:'4rem'}} disabled={!props.editMode}
                        onChange={(e) => {
                            props.onChange(e);
                            props.setFirstValue && props.setFirstValue(e);
                        }}>
                    {props.options.map((el : string) => (
                        <Option value={el}>{el}</Option>
                    ))}
                </Select>
            </Form.Item>
    )
}