import styles from '../styles/Login.module.css'
import { useForm } from '@mantine/form';
import { PasswordInput, TextInput, Button } from '@mantine/core';

export default function Login() {
    const form = useForm({
        initialValues: { name: '', password: '' },

        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters.' : null),
            password: (value) => (value.length < 8 ? 'Password must have at least 8 characters.' : null),
        },
    });

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={form.onSubmit(console.log)}>
                <TextInput label="Name" placeholder="Username" {...form.getInputProps('name')} />
                <PasswordInput label="Password" placeholder="Password" {...form.getInputProps('password')} />
                <Button type="submit" mt="sm">
                    Submit
                </Button>
            </form>
        </div>
    );
}