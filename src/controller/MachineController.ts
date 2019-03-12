import Machine from "../model/Machine";

class MachineController {
    public setMachineRecord = async (data: string) => {
        const {payload} = JSON.parse(data);
        const machine = new Machine(payload);

        try {
            const savedMachine = await machine.save();
            console.log(savedMachine);
        } catch (error) {
            throw error;
        }
    }
}

export const machineController = new MachineController();