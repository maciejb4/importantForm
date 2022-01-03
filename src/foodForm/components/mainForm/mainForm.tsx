import {Button, Card, Form, Input, Select} from "antd";
import {Controller, useForm } from "react-hook-form"
import 'antd/dist/antd.css';
import './mainForm.css';
import {useState} from "react";
import {useValidateForm} from "../../hooks/useValidateForm/useValidateForm";

const { Option } = Select;

type FormData = {
    type: string;
    name: string;
    description: string;
};

export const MainForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ editMode, setEditMode ] = useState<boolean>(true);
    const [ firstValue, setFirstValue ] = useState<string>('');
    const [ secondValue, setSecondValue ] = useState<string>('');
    const { validateForm } = useValidateForm(firstValue,secondValue);

    const onSubmit = (data : FormData) => {
        setEditMode(false);
    }

    const onEdit = () => {
        setEditMode(true);
    }

    return (
        <div className="container">
            <Card title="Food Form">
                <Form labelCol={{span: 9}} onFinish={handleSubmit(onSubmit)} style={{width:'20rem'}}>
                    <Controller
                        name="type"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'To pole jest wymagane',validate: validateForm}}
                        render={({ field: { onChange } }) =>
                            <Form.Item label="Food Category" validateStatus={errors.type ? "error" : "validating"} help={errors.type && errors.type.message}>
                                <Select style={{width:'4rem'}} disabled={!editMode}
                                        onChange={(e) => {
                                            console.log('e',e);
                                            onChange(e);
                                            setFirstValue(e);
                                        }}>
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                    <Option value="C">C</Option>
                                </Select>
                            </Form.Item>
                        }
                    />
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange } }) =>
                            <Form.Item label="Food Name">
                                <Input
                                    disabled={!editMode}
                                    onChange={(e) => {
                                        onChange(e.target.value);
                                        setSecondValue(e.target.value);
                                    }}
                                />
                            </Form.Item>
                        }
                    />
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'To pole jest wymagane' }}
                        render={({ field: { onChange } }) =>
                            <Form.Item label="Food Description" validateStatus={errors.description ? "error" : "validating"} help={errors.description && errors.description.message}>
                                <Input
                                    disabled={!editMode}
                                    onChange={onChange}
                                />
                            </Form.Item>

                        }
                    />
                    <div style={{ textAlign: 'right' }}>
                        {editMode && <Button htmlType="submit">Submit</Button>}
                        {!editMode && <Button onClick={onEdit}>Edit</Button>}
                    </div>
                </Form>
            </Card>

        </div>
    );

}