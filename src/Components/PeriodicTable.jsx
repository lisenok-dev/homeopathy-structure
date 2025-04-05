import Element from "./Element";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";

import React, { Fragment, useState } from 'react';

export default function PeriodicTable() {

    return (
        <Fragment>
            <table cellPadding="10" border="1">
                <thead>
                    <tr align="center">
                        <th>&nbsp;</th>
                        {Array.from({ length: 18 }, (_, i) => (
                            <TableColumn key={i} number={i} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableRow number="1" />
                        <Element period="1" symbol="H" name="Hydrogen" russianName="Водород" atomicMass="1.008" family="Неметаллы" search="[Hydrogen]" />
                        <td colSpan={16}></td>
                        <Element period="2" symbol="He" name="Helium" russianName="Гелий" atomicMass="4.0026" family="Инертные газы" search="[Helium]" />
                    </tr>
                    <tr>
                        <TableRow number="2" />
                        <Element period="3" symbol="Li" name="Lithium" russianName="Литий" atomicMass="6.94" family="Щелочные металлы" search="[Lithium]" />
                        <Element period="4" symbol="Be" name="Beryllium" russianName="Бериллий" atomicMass="9.012" family="Щелочноземельные металлы" search="[Beryllium]" />
                        <Element period="5" symbol="B" name="Boron" russianName="Бор" atomicMass="10.81" family="Металлы" search="[Boron]" />
                        <td className="nonetopborder" colSpan={6}></td>
                        <Element period="6" symbol="C" name="Carbon" russianName="Углерод" atomicMass="12.011" family="Неметаллы" search="[Carbon]" />
                        <td className="nonetopborder" colSpan={4}></td>
                        <Element period="7" symbol="N" name="Nitrogen" russianName="Азот" atomicMass="14.007" family="Неметаллы" search="[Nitrogen]" />
                        <Element period="8" symbol="O" name="Oxygen" russianName="Кислород" atomicMass="15.999" family="Неметаллы" search="[Oxygen]" />
                        <Element period="9" symbol="F" name="Fluorine" russianName="Фтор" atomicMass="18.998" family="Галогены" search="[Fluorine]" />
                        <Element period="10" symbol="Ne" name="Neon" russianName="Неон" atomicMass="20.180" family="Инертные газы" search="[Neon]" />
                    </tr>
                    <tr>
                        <TableRow number="3" />
                        <Element period="11" symbol="Na" name="Sodium" russianName="Натрий" atomicMass="22.990" family="Щелочные металлы" search="[Sodium]" />
                        <Element period="12" symbol="Mg" name="Magnesium" russianName="Магний" atomicMass="24.305" family="Щелочноземельные металлы" search="[Magnesium]" />
                        <Element period="13" symbol="Al" name="Aluminum" russianName="Алюминий" atomicMass="26.982" family="Металлы" search="[Aluminum]" />
                        <td className="nonetopborder" colSpan={6}></td>
                        <Element period="14" symbol="Si" name="Silicon" russianName="Кремний" atomicMass="28.085" family="Неметаллы" search="[Silicon]" />
                        <td className="nonetopborder" colSpan={4}></td>
                        <Element period="15" symbol="P" name="Phosphorus" russianName="Фосфор" atomicMass="30.974" family="Неметаллы" search="[Phosphorus]" />
                        <Element period="16" symbol="S" name="Sulfur" russianName="Сера" atomicMass="32.06" family="Неметаллы" search="[Sulfur]" />
                        <Element period="17" symbol="Cl" name="Chlorine" russianName="Хлор" atomicMass="35.45" family="Галогены" search="[Chlorine]" />
                        <Element period="18" symbol="Ar" name="Argon" russianName="Аргон" atomicMass="39.948" family="Инертные газы" search="[Argon]" />
                    </tr>
                    <tr>
                        <TableRow number="4" />
                        <Element period="19" symbol="K" name="Potassium" russianName="Калий" atomicMass="39.098" family="Щелочные металлы" search="[Potassium]" />
                        <Element period="20" symbol="Ca" name="Calcium" russianName="Кальций" atomicMass="40.078" family="Щелочноземельные металлы" search="[Calcium]" />
                        <Element period="21" symbol="Sc" name="Scandium" russianName="Скандий" atomicMass="44.956" family="Металлы" search="[Scandium]" />
                        <Element period="22" symbol="Ti" name="Titanium" russianName="Титан" atomicMass="47.867" family="Металлы" search="[Titanium]" />
                        <Element period="23" symbol="V" name="Vanadium" russianName="Ванадий" atomicMass="50.942" family="Металлы" search="[Vanadium]" />
                        <Element period="24" symbol="Cr" name="Chromium" russianName="Хром" atomicMass="51.996" family="Металлы" search="[Chromium]" />
                        <Element period="25" symbol="Mn" name="Manganese" russianName="Марганец" atomicMass="54.938" family="Металлы" search="[Manganese]" />
                        <Element period="26" symbol="Fe" name="Iron" russianName="Железо" atomicMass="55.845" family="Металлы" search="[Iron]" />
                        <Element period="27" symbol="Co" name="Cobalt" russianName="Кобальт" atomicMass="58.933" family="Металлы" search="[Cobalt]" />
                        <Element period="28" symbol="Ni" name="Nickel" russianName="Никель" atomicMass="58.693" family="Металлы" search="[Nickel]" />
                        <Element period="29" symbol="Cu" name="Copper" russianName="Медь" atomicMass="63.546" family="Металлы" search="[Copper]" />
                        <Element period="30" symbol="Zn" name="Zinc" russianName="Цинк" atomicMass="65.38" family="Металлы" search="[Zinc]" />
                        <Element period="31" symbol="Ga" name="Gallium" russianName="Галлий" atomicMass="69.723" family="Металлы" search="[Gallium]" />
                        <Element period="32" symbol="Ge" name="Germanium" russianName="Германий" atomicMass="72.63" family="Металлы" search="[Germanium]" />
                        <Element period="33" symbol="As" name="Arsenic" russianName="Мышьяк" atomicMass="74.922" family="Металлы" search="[Arsenic]" />
                        <Element period="34" symbol="Se" name="Selenium" russianName="Селен" atomicMass="78.971" family="Металлы" search="[Selenium]" />
                        <Element period="35" symbol="Br" name="Bromine" russianName="Бром" atomicMass="79.904" family="Галогены" search="[Bromine]" />
                        <Element period="36" symbol="Kr" name="Krypton" russianName="Криптон" atomicMass="83.798" family="Инертные газы" search="[Krypton]" />
                    </tr>
                    <tr>
                        <TableRow number="5" />
                        <Element period="37" symbol="Rb" name="Rubidium" russianName="Рубидий" atomicMass="85.468" family="Щелочные металлы" search="[Rubidium]" />
                        <Element period="38" symbol="Sr" name="Strontium" russianName="Стронций" atomicMass="87.62" family="Щелочноземельные металлы" search="[Strontium]" />
                        <Element period="39" symbol="Y" name="Yttrium" russianName="Иттрий" atomicMass="88.906" family="Металлы" search="[Yttrium]" />
                        <Element period="40" symbol="Zr" name="Zirconium" russianName="Цирконий" atomicMass="91.224" family="Металлы" search="[Zirconium]" />
                        <Element period="41" symbol="Nb" name="Niobium" russianName="Ниобий" atomicMass="92.906" family="Металлы" search="[Niobium]" />
                        <Element period="42" symbol="Mo" name="Molybdenum" russianName="Молибден" atomicMass="95.95" family="Металлы" search="[Molybdenum]" />
                        <Element period="43" symbol="Tc" name="Technetium" russianName="Технеций" atomicMass="98" family="Металлы" search="[Technetium]" />
                        <Element period="44" symbol="Ru" name="Ruthenium" russianName="Рутений" atomicMass="101.07" family="Металлы" search="[Ruthenium]" />
                        <Element period="45" symbol="Rh" name="Rhodium" russianName="Родий" atomicMass="102.91" family="Металлы" search="[Rhodium]" />
                        <Element period="46" symbol="Pd" name="Palladium" russianName="Палладий" atomicMass="106.42" family="Металлы" search="[Palladium]" />
                        <Element period="47" symbol="Ag" name="Silver" russianName="Серебро" atomicMass="107.87" family="Металлы" search="[Silver]" />
                        <Element period="48" symbol="Cd" name="Cadmium" russianName="Кадмий" atomicMass="112.41" family="Металлы" search="[Cadmium]" />
                        <Element period="49" symbol="In" name="Indium" russianName="Индий" atomicMass="114.82" family="Металлы" search="[Indium]" />
                        <Element period="50" symbol="Sn" name="Tin" russianName="Олово" atomicMass="118.71" family="Металлы" search="[Tin]" />
                        <Element period="51" symbol="Sb" name="Antimony" russianName="Сурьма" atomicMass="121.76" family="Металлы" search="[Antimony]" />
                        <Element period="52" symbol="Te" name="Tellurium" russianName="Теллур" atomicMass="127.60" family="Металлы" search="[Tellurium]" />
                        <Element period="53" symbol="I" name="Iodine" russianName="Иод" atomicMass="126.90" family="Галогены" search="[Iodine]" />
                        <Element period="54" symbol="Xe" name="Xenon" russianName="Ксенон" atomicMass="131.29" family="Инертные газы" search="[Xenon]" />
                    </tr>
                    <tr>
                        <TableRow number="6" />
                        <Element period="55" symbol="Cs" name="Cesium" russianName="Цезий" atomicMass="132.91" family="Щелочные металлы" search="[Cesium]" />
                        <Element period="56" symbol="Ba" name="Barium" russianName="Барий" atomicMass="137.33" family="Щелочноземельные металлы" search="[Barium]" />
                        <Element period="57" symbol="La" name="Lanthanum" russianName="Лантан" atomicMass="138.91" family="Металлы" search="[Lanthanum]" />
                        <Element period="72" symbol="Hf" name="Hafnium" russianName="Гафний" atomicMass="178.49" family="Металлы" search="[Hafnium]" />
                        <Element period="73" symbol="Ta" name="Tantalum" russianName="Тантал" atomicMass="180.95" family="Металлы" search="[Tantalum]" />
                        <Element period="74" symbol="W" name="Tungsten" russianName="Вольфрам" atomicMass="183.84" family="Металлы" search="[Tungsten]" />
                        <Element period="75" symbol="Re" name="Rhenium" russianName="Рений" atomicMass="186.21" family="Металлы" search="[Rhenium]" />
                        <Element period="76" symbol="Os" name="Osmium" russianName="Осмий" atomicMass="190.23" family="Металлы" search="[Osmium]" />
                        <Element period="77" symbol="Ir" name="Iridium" russianName="Иридий" atomicMass="192.22" family="Металлы" search="[Iridium]" />
                        <Element period="78" symbol="Pt" name="Platinum" russianName="Платина" atomicMass="195.08" family="Металлы" search="[Platinum]" />
                        <Element period="79" symbol="Au" name="Gold" russianName="Золото" atomicMass="196.97" family="Металлы" search="[Gold]" />
                        <Element period="80" symbol="Hg" name="Mercury" russianName="Ртуть" atomicMass="200.59" family="Металлы" search="[Mercury]" />
                        <Element period="81" symbol="Tl" name="Thallium" russianName="Таллий" atomicMass="204.38" family="Металлы" search="[Thallium]" />
                        <Element period="82" symbol="Pb" name="Lead" russianName="Свинец" atomicMass="207.2" family="Металлы" search="[Lead]" />
                        <Element period="83" symbol="Bi" name="Bismuth" russianName="Висмут" atomicMass="208.98" family="Металлы" search="[Bismuth]" />
                        <Element period="84" symbol="Po" name="Polonium" russianName="Полоний" atomicMass="209" family="Металлы" search="[Polonium]" />
                        <Element period="85" symbol="At" name="Astatine" russianName="Астат" atomicMass="210" family="Галогены" search="[Astatine]" />
                        <Element period="86" symbol="Rn" name="Radon" russianName="Радон" atomicMass="222" family="Инертные газы" search="[Radon]" />
                    </tr>
                    <tr>
                        <TableRow number="7" />
                        <Element period="87" symbol="Fr" name="Francium" russianName="Франций" atomicMass="223" family="Щелочные металлы" search="[Francium]" />
                        <Element period="88" symbol="Ra" name="Radium" russianName="Радий" atomicMass="226" family="Щелочноземельные металлы" search="[Radium]" />
                        <Element period="89" symbol="Ac" name="Actinium" russianName="Актиний" atomicMass="227" family="Металлы" search="[Actinium]" />
                        <Element period="104" symbol="Rf" name="Rutherfordium" russianName="Резерфордий" atomicMass="267" family="Металлы" search="[Rutherfordium]" />
                        <Element period="105" symbol="Db" name="Dubnium" russianName="Дубний" atomicMass="268" family="Металлы" search="[Dubnium]" />
                        <Element period="106" symbol="Sg" name="Seaborgium" russianName="Сиборгий" atomicMass="271" family="Металлы" search="[Seaborgium]" />
                        <Element period="107" symbol="Bh" name="Bohrium" russianName="Борий" atomicMass="270" family="Металлы" search="[Bohrium]" />
                        <Element period="108" symbol="Hs" name="Hassium" russianName="Хассий" atomicMass="277" family="Металлы" search="[Hassium]" />
                        <Element period="109" symbol="Mt" name="Meitnerium" russianName="Мейтнерий" atomicMass="276" family="Металлы" search="[Meitnerium]" />
                        <Element period="110" symbol="Ds" name="Darmstadtium" russianName="Дармштадтий" atomicMass="281" family="Металлы" search="[Darmstadtium]" />
                        <Element period="111" symbol="Rg" name="Roentgenium" russianName="Рентгений" atomicMass="280" family="Металлы" search="[Roentgenium]" />
                        <Element period="112" symbol="Cn" name="Copernicium" russianName="Коперниций" atomicMass="285" family="Металлы" search="[Copernicium]" />
                        <Element period="113" symbol="Nh" name="Nihonium" russianName="Нихоний" atomicMass="284" family="Металлы" search="[Nihonium]" />
                        <Element period="114" symbol="Fl" name="Flerovium" russianName="Флеровий" atomicMass="289" family="Металлы" search="[Flerovium]" />
                        <Element period="115" symbol="Mc" name="Moscovium" russianName="Московий" atomicMass="288" family="Металлы" search="[Moscovium]" />
                        <Element period="116" symbol="Lv" name="Livermorium" russianName="Ливерморий" atomicMass="293" family="Металлы" search="[Livermorium]" />
                        <Element period="117" symbol="Ts" name="Tennessine" russianName="Теннессин" atomicMass="294" family="Галогены" search="[Tennessine]" />
                        <Element period="118" symbol="Og" name="Oganesson" russianName="Оганесон" atomicMass="294" family="Инертные газы" search="[Oganesson]" />
                    </tr>
                    <tr className="separator"><td colSpan={19}></td></tr>
                    <tr>
                        <td className="border-right" colSpan={3}></td>
                        <Element period="57" symbol="La" name="Lanthanum" russianName="Лантан" atomicMass="138.91" family="Металлы" search="[Lanthanum]" />
                        <Element period="58" symbol="Ce" name="Cerium" russianName="Церий" atomicMass="140.12" family="Металлы" search="[Cerium]" />
                        <Element period="59" symbol="Pr" name="Praseodymium" russianName="Празеодим" atomicMass="140.91" family="Металлы" search="[Praseodymium]" />
                        <Element period="60" symbol="Nd" name="Neodymium" russianName="Неодим" atomicMass="144.24" family="Металлы" search="[Neodymium]" />
                        <Element period="61" symbol="Pm" name="Promethium" russianName="Прометий" atomicMass="145" family="Металлы" search="[Promethium]" />
                        <Element period="62" symbol="Sm" name="Samarium" russianName="Самарий" atomicMass="150.36" family="Металлы" search="[Samarium]" />
                        <Element period="63" symbol="Eu" name="Europium" russianName="Европий" atomicMass="151.96" family="Металлы" search="[Europium]" />
                        <Element period="64" symbol="Gd" name="Gadolinium" russianName="Гадолиний" atomicMass="157.25" family="Металлы" search="[Gadolinium]" />
                        <Element period="65" symbol="Tb" name="Terbium" russianName="Тербий" atomicMass="158.93" family="Металлы" search="[Terbium]" />
                        <Element period="66" symbol="Dy" name="Dysprosium" russianName="Диспрозий" atomicMass="162.50" family="Металлы" search="[Dysprosium]" />
                        <Element period="67" symbol="Ho" name="Holmium" russianName="Гольмий" atomicMass="164.93" family="Металлы" search="[Holmium]" />
                        <Element period="68" symbol="Er" name="Erbium" russianName="Эрбий" atomicMass="167.26" family="Металлы" search="[Erbium]" />
                        <Element period="69" symbol="Tm" name="Thulium" russianName="Тулий" atomicMass="168.93" family="Металлы" search="[Thulium]" />
                        <Element period="70" symbol="Yb" name="Ytterbium" russianName="Иттербий" atomicMass="173.04" family="Металлы" search="[Ytterbium]" />
                        <Element period="71" symbol="Lu" name="Lutetium" russianName="Лютеций" atomicMass="174.97" family="Металлы" search="[Lutetium]" />
                        <td className="border-left"></td>
                    </tr>
                    <tr>
                        <td className="border-right" colSpan={3}></td>
                        <Element period="89" symbol="Ac" name="Actinium" russianName="Актиний" atomicMass="227" family="Металлы" search="[Actinium]" />
                        <Element period="90" symbol="Th" name="Thorium" russianName="Торий" atomicMass="232.04" family="Металлы" search="[Thorium]" />
                        <Element period="91" symbol="Pa" name="Protactinium" russianName="Протактиний" atomicMass="231.04" family="Металлы" search="[Protactinium]" />
                        <Element period="92" symbol="U" name="Uranium" russianName="Уран" atomicMass="238.03" family="Металлы" search="[Uranium]" />
                        <Element period="93" symbol="Np" name="Neptunium" russianName="Нептуний" atomicMass="237" family="Металлы" search="[Neptunium]" />
                        <Element period="94" symbol="Pu" name="Plutonium" russianName="Плутоний" atomicMass="244" family="Металлы" search="[Plutonium]" />
                        <Element period="95" symbol="Am" name="Americium" russianName="Америций" atomicMass="243" family="Металлы" search="[Americium]" />
                        <Element period="96" symbol="Cm" name="Curium" russianName="Кюрий" atomicMass="247" family="Металлы" search="[Curium]" />
                        <Element period="97" symbol="Bk" name="Berkelium" russianName="Берклий" atomicMass="247" family="Металлы" search="[Berkelium]" />
                        <Element period="98" symbol="Cf" name="Californium" russianName="Калифорний" atomicMass="251" family="Металлы" search="[Californium]" />
                        <Element period="99" symbol="Es" name="Einsteinium" russianName="Эйнштейний" atomicMass="252" family="Металлы" search="[Einsteinium]" />
                        <Element period="100" symbol="Fm" name="Fermium" russianName="Фермий" atomicMass="257" family="Металлы" search="[Fermium]" />
                        <Element period="101" symbol="Md" name="Mendelevium" russianName="Менделевий" atomicMass="258" family="Металлы" search="[Mendelevium]" />
                        <Element period="102" symbol="No" name="Nobelium" russianName="Нобелий" atomicMass="259" family="Металлы" search="[Nobelium]" />
                        <Element period="103" symbol="Lr" name="Lawrencium" russianName="Лоуренсий" atomicMass="262" family="Металлы" search="[Lawrencium]" />
                        <td className="border-left"></td>
                    </tr>
                </tbody>
            </table>

        </Fragment>



    );
}