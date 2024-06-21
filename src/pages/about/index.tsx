import "../globals.css";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardMedia,
  Chip,
  Rating,
  Switch,
  Stack,
  Typography,
} from "@mui/material";
export default function About() {
  const [active, setActive] = React.useState(false);
  return (
    <div className="fkex w-full h-full bg-white">
      <Card>
        <CardMedia
          component="img"
          alt="Yosemite National Park"
          image="/yosemite.jpeg"
        />
        <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
          <Stack direction="column" spacing={0.5} useFlexGap>
            <Typography>Yosemite National Park, California, USA</Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <Chip
                size="small"
                label={active ? "Active" : "Inactive"}
                color={active ? "success" : "default"}
              />
              <Rating defaultValue={1} size="small" />
            </Stack>
          </Stack>
          <Switch checked={active} />
        </Stack>
      </Card>
      <Link href="/blog/2">To Blog</Link>
    </div>
  );
}
