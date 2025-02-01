import BackModal from "@/models/master/BackModal";
import CharniModal from "@/models/master/CharniModal";
import ColorModal from "@/models/master/ColorModal";
import CutModal from "@/models/master/CutModal";
import FluroscenceModal from "@/models/master/FluroscenceModal";
import HeightModal from "@/models/master/HeightModal";
import LengthModal from "@/models/master/LengthModal";
import MixCharniModal from "@/models/master/MixCharniModal";
import PolishModal from "@/models/master/PolishModal";
import PurityModal from "@/models/master/PurityModal";
import RatioModal from "@/models/master/RatioModal";
import ShapeModal from "@/models/master/ShapeModal";
import StoneModal from "@/models/master/StoneModal";
import SymmetryModal from "@/models/master/SymmetryModal";
import TableModal from "@/models/master/TableModal";
import TensionModal from "@/models/master/TensionModal";
import WidthModal from "@/models/master/WidthModal";
import LabCertificateModal from "@/models/master/LabCertificateModal";
import { Model } from "mongoose";


export const tableMappings: Record<string, Model<any>> = {
    back: BackModal,
    charni: CharniModal,
    color: ColorModal,
    cut: CutModal,
    fluro: FluroscenceModal,
    height: HeightModal,
    labcerti: LabCertificateModal,
    length: LengthModal,
    mixcharni: MixCharniModal,
    polish: PolishModal,
    purity: PurityModal,
    ratio: RatioModal,
    shape: ShapeModal,
    stone: StoneModal,
    symmetry: SymmetryModal,
    table: TableModal,
    tension: TensionModal,
    width: WidthModal,
};


export interface ColorRow {
    name: string;
    code: string;
    order: number;
    status: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
}