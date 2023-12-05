"use client"

import { useEffect, useState } from "react";
import TicketCard from "./Components/TicketCard";


interface Ticket {
  _id: string,
  title: string,
  description: string,
  category: string,
  priority: number,
  progress: number,
  status: string,
  createdAt: Date,
}

export default function Home() {

  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    const responce = await fetch("http://localhost:3000/api/tickets")
    const data = await responce.json()
    setTickets(data)
  }

  useEffect(() => {
    getTickets()
  }, [])

  const uniqueCategories = [
    // @ts-ignore
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket:Ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      // @ts-ignore
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
