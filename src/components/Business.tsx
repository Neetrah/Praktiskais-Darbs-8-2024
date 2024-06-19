"use client";

import {
  BanknotesIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import type { Business } from "@prisma/client";
import { Button, Table, Text } from "@radix-ui/themes";
import React from "react";

const Business: React.FC<Business> = ({
  address,
  booked,
  business_name,
  called_at,
  created_at,
  email_1,
  email_2,
  email_3,
  facebook,
  id,
  linkedin,
  notes,
  phone_number,
  picked_up,
  pitched,
  website,
}) => {
  return (
    <>
      <div className={`w-full gap-2`}></div>

      <Table.Row className="group">
        <Table.Cell p="2" py="3">
          <div className="grid grid-cols-2 gap-1 w-full">
            <button className="p-0 bg-green-400 flex items-center justify-center h-6 w-full rounded-sm">
              <PhoneIcon className="text-white h-4" />
            </button>

            <button className="p-0 bg-blue-400 flex items-center justify-center h-6 w-full rounded-sm">
              <EnvelopeIcon className="text-white h-4" />
            </button>

            <button className="p-0 bg-green-600 flex items-center justify-center h-6 w-full rounded-sm">
              <BanknotesIcon className="text-white h-4" />
            </button>
          </div>
        </Table.Cell>

        <Table.RowHeaderCell>{business_name}</Table.RowHeaderCell>
        <Table.Cell>{address}</Table.Cell>
        <Table.Cell minWidth="10rem">
          <Text as="p" color="blue" className="hover:underline">
            <a href={`tel:${phone_number}`}>{phone_number}</a>
          </Text>
        </Table.Cell>
        <Table.Cell>
          {website && (
            <Text as="p" color="blue" className="hover:underline">
              <a href={website} target="_blank" rel="noreferer">
                {website}
              </a>
            </Text>
          )}
        </Table.Cell>
        <Table.Cell>
          <div className="flex flex-col">
            <Text as="p" color="blue" className="hover:underline">
              <a href={`mailto:${email_1}`}>{email_1}</a>
            </Text>
            <Text as="p" color="blue" className="hover:underline">
              <a href={`mailto:${email_2}`}>{email_2}</a>
            </Text>
            <Text as="p" color="blue" className="hover:underline">
              <a href={`mailto:${email_3}`}>{email_3}</a>
            </Text>
          </div>
        </Table.Cell>
        <Table.Cell>
          {facebook && (
            <Text as="p" color="blue" className="hover:underline">
              <a href={facebook} target="_blank" rel="noreferer">
                {facebook}
              </a>
            </Text>
          )}
        </Table.Cell>
        <Table.Cell>
          {linkedin && (
            <Text as="p" color="blue" className="hover:underline">
              <a href={linkedin} target="_blank" rel="noreferer">
                {linkedin}
              </a>
            </Text>
          )}
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default Business;
