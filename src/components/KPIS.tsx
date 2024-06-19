import { Card, Text } from "@radix-ui/themes";
import axios from "axios";
import React from "react";

const KPIS = async () => {
  let kpis: {
    pur: number;
    pr: number;
    mbr: number;
    callsToday: number;
  } | null = null;

  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/kpis"
    );
    kpis = data;
  } catch (err) {}

  if (!kpis) {
    return null;
  }

  return (
    <section className="w-full grid grid-cols-4 gap-4">
      <Card variant="surface">
        <Text as="div" size="2" weight="bold">
          {kpis.callsToday}
        </Text>
        <Text as="div" color="gray" size="2">
          Calls today
        </Text>
      </Card>

      <Card variant="surface">
        <Text as="div" size="2" weight="bold">
          {kpis.pur}%
        </Text>
        <Text as="div" color="gray" size="2">
          Pick up rate
        </Text>
      </Card>

      <Card variant="surface">
        <Text as="div" size="2" weight="bold">
          {kpis.pr}%
        </Text>
        <Text as="div" color="gray" size="2">
          Pitch rate
        </Text>
      </Card>

      <Card variant="surface">
        <Text as="div" size="2" weight="bold">
          {kpis.mbr}%
        </Text>
        <Text as="div" color="gray" size="2">
          Meeting booked rate
        </Text>
      </Card>
    </section>
  );
};

export default KPIS;
