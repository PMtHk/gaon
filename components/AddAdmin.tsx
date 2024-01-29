import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddAdmin = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-4 w-full h-full rounded-2xl flex flex-col justify-center items-center bg-gradient-to-br from-[#469CE8] to-[#1335E6] lg:text-lg font-semibold text-white hover:-translate-y-0.5 hover:drop-shadow-xl transform transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path d="M352.062,314.075c-19.834-20.912-43.665-36.124-68.765-44.408c25.008-22.555,40.754-55.191,40.754-91.439    c0-67.899-55.24-123.139-123.139-123.139S77.772,110.329,77.772,178.228c0,36.248,15.746,68.884,40.754,91.439    c-25.101,8.285-48.932,23.498-68.766,44.409C17.672,347.906,0,391.728,0,437.468v19.443h401.823v-19.443    C401.823,391.728,384.15,347.906,352.062,314.075z M116.658,178.228c0-46.457,37.796-84.253,84.253-84.253    c46.457,0,84.253,37.796,84.253,84.253s-37.796,84.253-84.253,84.253C154.454,262.481,116.658,224.685,116.658,178.228z     M40.256,418.025c9.65-67.94,68.591-116.658,121.769-116.658h77.772c53.178,0,112.119,48.718,121.769,116.658H40.256z" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="453.671,223.595 453.671,165.266 414.785,165.266 414.785,223.595 356.456,223.595 356.456,262.481     414.785,262.481 414.785,320.81 453.671,320.81 453.671,262.481 512,262.481 512,223.595   " />
              </g>
            </g>
          </svg>
          <span className="break-keep mt-2">관리자 계정 추가</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>관리자 계정 추가</DialogTitle>
          <DialogDescription>새로운 관리자를 추가합니다.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              아이디
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              비밀번호
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAdmin;
