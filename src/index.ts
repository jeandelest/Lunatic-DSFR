import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Suggester } from "./Suggester";
import { CheckboxGroup } from "./CheckboxGroup";
import { Datepicker } from "./Datepicker";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { InputNumber } from "./InputNumber";
import { Roundabout } from "./Roundabout";
import { Sequence } from "./Sequence";
import { Subsequence } from "./Subsequence";
import { SummaryResponses, SummaryTitle } from "./Summary";
import { Textarea } from "./Textarea";
import { CheckboxBoolean } from "./CheckboxBoolean";
import { RadioGroup } from "./RadioGroup";
import { Declarations } from "./Declarations";
import { Question } from "./Question";
import { ComponentWrapper } from "./ComponentWrapper";
import { Duration } from "./Duration/Duration";
import { Table, Tr } from "./Table";
import { Loop } from "./Loop";

export const slotComponents = {
    Question,
    Suggester,
    Dropdown,
    Input,
    InputNumber,
    CheckboxGroup,
    CheckboxBoolean,
    RadioGroup,
    Datepicker,
    Duration,
    Roundabout,
    Sequence,
    Subsequence,
    SummaryResponses,
    SummaryTitle,
    Textarea,
    Declarations,
    Table,
    Tr,
    ComponentWrapper,
    Loop,
} as Partial<LunaticSlotComponents> satisfies Partial<LunaticSlotComponents>;
//We must remove `as Partial<LunaticSlotComponents>` when Roundabout and summary refactored
