import type { Business } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import BusinessComponent from "./Business";

const Businesses = async () => {
  let businesses: Business[] | null = null;

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/business`
    );
    businesses = data;
  } catch (err) {

  }

  return (
    <section className="w-full flex flex-col">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Options</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Business Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone number</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Website</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Emails</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Facebook</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Linkedin</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {businesses?.map((business, i) => (
            <BusinessComponent {...business} key={i} />
          ))}
        </Table.Body>
      </Table.Root>
    </section>
  );
};

export default Businesses;
