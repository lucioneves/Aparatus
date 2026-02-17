
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"

interface BookingItemProps {
    serviceName: string
    barbershopName: string
    barbershopImageUrl: string
    date: Date
}

const BookingItem = ({serviceName, barbershopName, barbershopImageUrl, date}: BookingItemProps) => {
    return (
        <Card className="flex flex-row min-w-full w-full items-center justify-between p-0">
            <div className="flex flex-col gap-4 flex-1 p-4">
                <Badge>Confirmado</Badge>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">{serviceName}</p>
                    <div className="flex items-center gap-2 ">
                        <Avatar className="w-6 h-6">
                            <AvatarImage src={barbershopImageUrl}  />
                        </Avatar>
                        <p className="text-muted-foreground text-sm">{barbershopName}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 border-l py-3">
             <p className="text-xs capitalize">
              {date.toLocaleDateString("pt-BR", {month: "long"})}
             </p>
             <p>{date.toLocaleDateString("pt-BR", {day: "2-digit"})}</p>
             <p className="text-xs capitalize">
                {date.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"})}
             </p>
             
            </div>
        </Card>
    )
}

export default BookingItem;