import { Button } from "@/lib/atoms/Button/Button";
import { Heading } from "@/lib/atoms/Heading/Heading";
import { TextInput } from "@/lib/atoms/Inputs/TextInput/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";

interface SubscriptionContactFormProps {}

interface Inputs {
    companyName: string;
    clientName: string;
    workEmail: string;
    expectedVolume: string;
}
const SubscriptionContactForm = ({}: SubscriptionContactFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ companyName, clientName, workEmail, expectedVolume }) => {
        console.log({ companyName, clientName, workEmail, expectedVolume });
    };
    return (
        <div
            className={
                "border bg-white dark:bg-[#222234] p-6 rounded-lg relative border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark"
            }
        >
            <Heading tag="h2" className="text-xl font-bold w-full text-center mb-2">
                Custom
            </Heading>
            <p className="text-xs text-center mb-3">
                For companies with 10,000+ images monthly looking for custom enhancement solutions.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading tag="h3" className="text-lg font-bold w-full text-center my-4">
                    Contact us
                </Heading>
                <TextInput
                    name="companyName"
                    register={register}
                    errors={errors}
                    validation={{ required: true, minLength: 1 }}
                    className="py-1 mb-2"
                    label="Company name"
                />
                <TextInput
                    name="clientName"
                    register={register}
                    errors={errors}
                    validation={{ required: true, minLength: 1 }}
                    className="py-1 mb-2"
                    label="Your name"
                />
                <TextInput
                    name="workEmail"
                    register={register}
                    errors={errors}
                    validation={{ required: true, minLength: 1 }}
                    className="py-1 mb-2"
                    label="Work email"
                    type="email"
                />
                <TextInput
                    name="expectedVolume"
                    register={register}
                    errors={errors}
                    validation={{ required: true, minLength: 1 }}
                    className="py-1 mb-4"
                    label="Expected volume"
                />
                <div className="w-full flex justify-center items-center">
                    <Button type="submit" variant={"default"} className="mt-4">
                        {`Let's chat`}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export { SubscriptionContactForm };
