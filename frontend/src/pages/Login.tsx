import Button from "../components/atoms/Button";
import Tabs from "../components/molecules/Tabs";

export interface LoginProps {
}

export default function Login({}:LoginProps) {
    return (
        <div>
            This is Login page
            <Tabs tabLabels={["hello","hello2"] }>
                <div>First</div>
                <div>second</div>
            </Tabs>
            {/* <Button  isSolid={true} onClick={()=>{}}>
                Something
            </Button> */}
        </div>
    );
}
