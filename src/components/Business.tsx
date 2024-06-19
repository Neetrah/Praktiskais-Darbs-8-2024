"use client";

import { formatDate } from "@/utils/formatDate";
import {
  BanknotesIcon,
  EnvelopeIcon,
  MicrophoneIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import type { Business } from "@prisma/client";
import {
  AlertDialog,
  Badge,
  Button,
  Flex,
  Table,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (data: {
    called?: boolean;
    picked_up?: boolean;
    pitched?: boolean;
    booked?: boolean;
  }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    await axios
      .put(`/api/business/${id}`, data)
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        console.error(err);
      });

    setLoading(false);
  };

  const handleDelete = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    await axios
      .delete(`/api/business/${id}`)
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        console.error(err);
      });

    setLoading(false);
  };

  return (
    <>
      <div className="max-w-[10rem] overflow-visible">
        <div
          className={`w-full gap-2 flex ${
            called_at || picked_up || pitched || booked ? "p-2 pb-0" : ""
          }`}
        >
          {called_at && (
            <Badge color="green">
              Called ({formatDate(new Date(called_at))})
            </Badge>
          )}

          {picked_up && <Badge color="blue">Answered</Badge>}

          {pitched && <Badge color="jade">Pitched</Badge>}

          {booked && <Badge color="ruby">Meeting Booked</Badge>}
        </div>
      </div>

      <Table.Row className="group">
        <Table.Cell p="2" py="3">
          <div className="grid grid-cols-2 gap-1 w-full max-w-[10rem]">
            <button
              className="p-0 bg-green-400 flex items-center justify-center h-6 w-full rounded-sm"
              onClick={() => handleUpdate({ called: called_at ? false : true })}
              disabled={loading}
            >
              <PhoneIcon className="text-white h-4" />
            </button>

            <button
              className="p-0 bg-sky-700 flex items-center justify-center h-6 w-full rounded-sm"
              onClick={() => handleUpdate({ picked_up: !picked_up })}
              disabled={loading}
            >
              <PhoneArrowDownLeftIcon className="text-white h-4" />
            </button>

            <button
              className="p-0 bg-orange-500 flex items-center justify-center h-6 w-full rounded-sm"
              onClick={() => handleUpdate({ pitched: !pitched })}
              disabled={loading}
            >
              <MicrophoneIcon className="text-white h-4" />
            </button>

            <button
              className="p-0 bg-purple-600 flex items-center justify-center h-6 w-full rounded-sm"
              onClick={() => handleUpdate({ booked: !booked })}
              disabled={loading}
            >
              <BanknotesIcon className="text-white h-4" />
            </button>

            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <button
                  className="p-0 bg-red-600 flex items-center justify-center h-6 w-full rounded-sm"
                  disabled={loading}
                >
                  <TrashIcon className="text-white h-4" />
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Delete business</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure you want to delete this business?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red" onClick={handleDelete}>
                      Delete
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
        </Table.Cell>

        <Table.RowHeaderCell minWidth="10rem">{business_name}</Table.RowHeaderCell>
        <Table.Cell minWidth="10rem">{address}</Table.Cell>
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
