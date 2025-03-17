"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import NotificationCard from "@components/cards/src/notificationCard";
import useToggle from "@hooks/useToggle";
import { NotificationDataType } from "graphql/notification/notification.fragment";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

import Button from "./button";

interface BellProps {
  hasNotifications: boolean;
}

const Bell = ({ hasNotifications }: BellProps) => {
  const { isOpen, open, close } = useToggle();

  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getNotifications"] }],
  });

  const notifications =
    processResultType<{ notifications: NotificationDataType[] }>(queryResults.getNotifications.data)
      ?.notifications || [];

  console.log(notifications);

  return (
    <div className="relative group" onMouseEnter={() => open()} onMouseLeave={() => close()}>
      <Button
        color={hasNotifications ? "danger" : "close"}
        size={"sm"}
        radius={"full"}
        variant={"bordered"}
        className={"relative flex items-center justify-center hover:bg-transparent"}>
        <BellIcon
          data-testid="bell-icon"
          className={`w-8 h-8 ${hasNotifications ? "animate-shake text-orange-700" : ""} text-gray-500`}
        />

        {hasNotifications && (
          <span className="absolute top-0 right-[6px] h-2 w-2">
            <span
              data-testid="ping-animation"
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
        )}
      </Button>

      {isOpen && (
        <div
          className="absolute right-[-170px] w-[400px] bg-slate-50 shadow-lg border-4 border-stone-600 rounded-lg p-2 max-h-[300px]
                      opacity-0 invisible group-hover:opacity-100 overflow-auto group-hover:visible hover:opacity-100 hover:visible transition-opacity">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <Link
                key={notification.hospitalId}
                href={`/${notification.hospitalId}/${
                  notification.title === "식별자 에러" ? "identifier" : "type"
                }`}>
                <NotificationCard
                  color={notification.severity.toLocaleLowerCase()}
                  variant={"shadow"}
                  size={"sm"}
                  radius={"lg"}
                  className={"mb-4 z-20"}
                  data={{
                    hospitalName: notification.hospitalName,
                    title: notification.title,
                    createAt: notification.createdAt,
                  }}
                />
              </Link>
            ))
          ) : (
            <div className="text-center p-2">Loading</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Bell;

Bell.displayName = "Bell";
