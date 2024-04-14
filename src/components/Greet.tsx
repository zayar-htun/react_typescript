type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
    const {messageCount = 0} = props;
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread
                    messages.....` : `Welcome Guest`
                }
                
            </h1>
        </div>
    );
}
