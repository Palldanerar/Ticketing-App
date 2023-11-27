import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
    return (
        <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay priority={2} />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <div style={{ display: "contents" }}>
                <h4 className="mb-1">test</h4>
                <hr className="h-px  border-0 bg-page mb-2 "></hr>
                <p className="whitespace-pre-wrap">test</p>

                <div className="flex-grow"></div>
                <div className="flex mt-2">
                    <div className="flex flex-col">
                        <p className="text-xs  my-1">78</p>
                        <ProgressDisplay progress={78} />
                    </div>
                    <div className="ml-auto  flex items-end">
                        <StatusDisplay status="not started" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard