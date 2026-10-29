"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getTokenFromClient } from "@/lib/getTokenClient";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteDestination({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    const token = await getTokenFromClient()
    const res = await fetch(`http://localhost:5000/add-destination/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`
      }

    });
    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success('Delete successful')
      router.push("/all-destination");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        nativeButton={false}
        render={
          <span className="inline-flex items-center gap-1.5 px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-medium rounded-sm transition hover:cursor-pointer">
            <Trash2 className="w-3.5 h-3.5" />
            Delete
          </span>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
