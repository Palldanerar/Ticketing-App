import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";

interface Ticket {
    _id: string,
    title: string,
    description: string,
    category: string,
    priority: number,
    progress: number,
    status: "done" | "started" | "not started",
    createdAt: Date,
}

interface ticketProps {
    ticket: Ticket
}

const TicketCard = ({ ticket }: ticketProps) => {
    function formatTimestamp(timestamp: any) {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };

        const date = new Date(timestamp);
        {/*@ts-ignore*/}
        const formattedDate = date.toLocaleString("en-US", options);

        return formattedDate;
    }

    const createdDateTime = formatTimestamp(ticket.createdAt);

    return (
        <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                    {/*@ts-ignore*/}
                    <DeleteBlock id={ticket._id} />
                </div>
            </div>
            <div>
                <h4 className="mb-1">{ticket.title}</h4>
                <hr className="h-px  border-0 bg-page mb-2 "></hr>
                <p className="whitespace-pre-wrap">{ticket.description}</p>

                <div className="flex-grow"></div>
                <div className="flex mt-2">
                    <div className="flex flex-col">
                        <p className="text-xs  my-1">{createdDateTime}</p>
                        <ProgressDisplay progress={ticket.progress} />
                    </div>
                    <div className="ml-auto  flex items-end">
                        <StatusDisplay status={ticket.status} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
