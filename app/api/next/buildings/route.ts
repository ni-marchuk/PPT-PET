import {NextResponse} from "next/server";
import {Building} from "@/entities/buildings/types";
import {emptyDefaultResponse} from "@/shared/constants/api";

export const buildingsMock: Building[] = [
    {
        id: 1,
        name: "Laguna Beach Residence",
        description: "Современные апартаменты рядом с пляжем Банг Тао.",
        area: 42,
        price: 4200000,
    },
    {
        id: 2,
        name: "Kata Ocean View",
        description: "Квартира с видом на море и развитой инфраструктурой.",
        area: 58,
        price: 6800000,
    },
    {
        id: 3,
        name: "Rawai Villa Park",
        description: "Вилла в закрытом комплексе с собственным бассейном.",
        area: 135,
        price: 14500000,
    },
    {
        id: 4,
        name: "Phuket Town Loft",
        description: "Лофт в центре Пхукет-тауна, рядом с кафе и магазинами.",
        area: 48,
        price: 3900000,
    },
    {
        id: 5,
        name: "Kamala Hillside",
        description: "Апартаменты в зелёной зоне с панорамными окнами.",
        area: 62,
        price: 5900000,
    },
    {
        id: 6,
        name: "Surin Luxury Suites",
        description: "Премиальный комплекс в пешей доступности от пляжа.",
        area: 75,
        price: 8900000,
    },
    {
        id: 7,
        name: "Chalong Marina View",
        description: "Инвестиционные апартаменты рядом с мариной.",
        area: 40,
        price: 3600000,
    },
    {
        id: 8,
        name: "Patong City Condo",
        description: "Городская квартира для аренды и жизни.",
        area: 35,
        price: 3100000,
    },
    {
        id: 9,
        name: "Nai Harn Garden Villas",
        description: "Уютные виллы рядом с одним из лучших пляжей острова.",
        area: 160,
        price: 16800000,
    },
    {
        id: 10,
        name: "Bang Tao Investment Condo",
        description: "Проект с гарантированным доходом от аренды.",
        area: 50,
        price: 5200000,
    },
    {
        id: 11,
        name: "Cape Panwa Residence",
        description: "Апартаменты в тихом районе с приватным пляжем.",
        area: 68,
        price: 7400000,
    },
    {
        id: 12,
        name: "Mai Khao Beachfront",
        description: "Редкий объект на первой линии у национального парка.",
        area: 82,
        price: 9800000,
    },
];


export async function GET() {
    return NextResponse.json({
        ...emptyDefaultResponse,
        data: buildingsMock,
        status: 'success',
    })
}
