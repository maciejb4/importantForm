import {Button, Card, Form, Input, Select} from "antd";
import {Controller, useForm } from "react-hook-form"
import 'antd/dist/antd.css';
import './mainForm.css';
import {useState} from "react";
import {useValidateForm} from "../../hooks/useValidateForm/useValidateForm";
import {SelectForm} from "../selectForm/selectForm";
import {InputForm} from "../inputForm/inputForm";

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
        console.log('data',data);
        setEditMode(false);
        alert('sukces');
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
                            <SelectForm
                                label="Food Type"
                                errors={errors}
                                editMode={editMode}
                                onChange={onChange}
                                options={['A','B','C']}
                                setFirstValue={setFirstValue}
                            />

                        }
                    />
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange } }) =>
                            <InputForm
                                label="Food Name"
                                editMode={editMode}
                                onChange={onChange}
                                setSecondValue={setSecondValue}
                            />
                        }
                    />
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'To pole jest wymagane' }}
                        render={({ field: { onChange } }) =>
                            <InputForm
                                label="Food Description"
                                errors={errors}
                                editMode={editMode}
                                onChange={onChange}
                            />

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